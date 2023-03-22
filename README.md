# Intro-Slider
Introduction Slider is a simple and lightweight library for creating introductory sliders for Android apps. With Introduction Slider, you can easily create customizable slides that can be used to introduce users to the features and functionalities of your app.

## Installation
To use Introduction Slider in your Android app, you need to add the following dependency to your project-level build.gradle file:
```
allprojects {
    repositories {
        ...
        maven { url 'https://jitpack.io' }
    }
}
```
Then, add the following dependency to your app-level build.gradle file:
```
dependencies {
    implementation 'com.github.Samuel-Momoh:intro-slider:1.0.0'
}
```

## Usage
To use Introduction Slider in your app, follow these simple steps:

1. Create a new activity for the introduction slider.

2. Create a layout file for each slide that you want to include in the slider.

3. Initialize the IntroductionSlider class in your activity and pass in the layout files for each slide.

4. Call the startSlider() method to start the introduction slider.

## Customization
Introduction Slider is highly customizable. You can customize the appearance and behavior of the slides by using the various methods provided by the IntroductionSlider class. Here are some of the customization options available:

Set the background color of the slides
Set the text color and size of the slide titles and descriptions
Set the font of the slide titles and descriptions
Set the animation style for transitioning between slides
For more customization options, check out the IntroductionSlider class.

## Contributing
If you find a bug or have a feature request, please open an issue on the Github repository. Pull requests are also welcome.
