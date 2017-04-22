import os
import socket
import sys
import json
from streamparse import Bolt
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
from textblob import TextBlob


class ProcessFacebook(Bolt):
    outputs = ['avgScore', 'average']

    def initialize(self, conf, ctx):
        self.total = 0
        self.average = 0
        self.message = {}

        # self.sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        #
        # # Connect the socket to the port where the server is listening
        # self.server_address = ('localhost', 5000)
        # self.sock.connect(self.server_address)

    def _increment(self, sentiment):
        oldSum = self.average * self.total
        self.total += 1
        self.average = (oldSum + sentiment)/self.total

    def process(self, tup):
        tweet = tup.values[0]
        if(tweet is not None):
            if(("facebook" in tweet) or ("Facebook" in tweet)):
                self.message['text'] = tweet
                analyzer = SentimentIntensityAnalyzer() #Initialize Vader Analyzer
                vaderScore = analyzer.polarity_scores(tweet) #Calculate Vader Score
                textBlobScore = TextBlob(tweet).sentiment.polarity #Calculate TextBlob Score
                avgScore = (vaderScore['compound'] + textBlobScore) /2 #Take the average

                self.message['score'] = avgScore

                if avgScore != 0.0:
                    self._increment(avgScore)

                self.message['average'] = self.average

                self.logger.info("Tweet Score: %.4f, Cumulative Score: %.4f" %(avgScore, self.average))
                self.emit([avgScore, self.average])

                tweetText = tweet.encode('utf-8')
                message = "{text: %s, score: %s, average: %s}" %(tweetText, str(avgScore), str(self.average))
                #self.sock.sendall(message)
