[![Build Status](https://travis-ci.org/SoundBread/soundbread-nodejs.svg?branch=master)](https://travis-ci.org/SoundBread/soundbread-nodejs)
[![Dependencies](https://david-dm.org/SoundBread/soundbread-nodejs/status.svg)](https://david-dm.org/SoundBread/soundbread-nodejs/)
[![Dev Dependencies](https://david-dm.org/SoundBread/soundbread-nodejs/dev-status.svg)](https://david-dm.org/SoundBread/soundbread-nodejs?type=dev)

## Getting started
```
npm install
npm start
```

## Sprite generation with imagemagick
```
convert <input_img> -resize 190x190^ -gravity center -extent 190x190 -transparent white <output>.jpg
```

## Youtube audio download
Use youtube-dl (https://github.com/rg3/youtube-dl/) to download audio:
```
youtube-dl --extract-audio --audio-format mp3 https://www.youtube.com/watch?v=m0JvNKg7vcc
```

Trim audio to selection:
```
avconv -ss <start> -t <duration> -i <infile> <outfile>
```
Example:
```
avconv -ss 00:00:48 -t 00:00:02 -i Mastermovies\ -\ Nicht\ Rijder-m0JvNKg7vcc.mp3 michael.mp3
```
