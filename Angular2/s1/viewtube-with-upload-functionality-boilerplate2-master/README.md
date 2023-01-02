# ViewTube

## ViewTube with upload functionality

### Context 

Front-end developer team at eZone has created ViewTube application which rendered videos as cards with brief description, number of views, duration since it was published and the length of video. They were able to search for a particular video using search box. ​

​They now wanted to add a new feature which enables them to upload a new video having various details like title, description, audience type, age restriction, tags, visibility, license, distribution easily and quickly.​

### Challenge

​As a Front-end developer, you have to create a simple form to upload these video details. Also ensure all validations are checked properly and display appropriate validation error messages to the users to make the form user-friendly.

### Problem
This exercise is a continuation of the previous exercise(ViewTube with material design). Following are the things that learners have to complete:

1. Create studio-upload component
2. Web page should have a title in the header and side nav-bar (with menu item to upload) created using schematics
3. Video upload form fields should contain
    - Video url (Mandatory, Valid URL pattern)
    - Video Title (Mandatory, Max length:120)
    - video Description
    - Video Duration (Mandatory, valid duration pattern)
    - Channel Title (Mandatory)
    - Audience Type (Radio Button)
        - Yes,its made for Kids
        - Not for kids
    - Age Restriction  (Radio Button)
        - Yes, Restrict my videos to viewers over 18
        - No, don't restrict my videos to viewers over 18  
    - Tags (Chip list)
    - Recording Date
    - Video Location (Drop down for places) 
    - License (Drop Down)
        - Standard Viewtube License
        - Creative Common License
    - Distribution (Drop down)
        - Everywhere
        - Make this video available only on monetized platforms
    - Video Category (Drop down)
        - Film & Animation
        - Autos & Vehicles
        - Music
        - Pets & Animals
        - Sports
        - Travel & Events
        - Gaming
        - People & Blogs
        - Comedy
        - Entertainment
        - News & Politics
        - Howto & Style
        - Education
        - Science & Technology
        - Nonprofits & Activism 
    - Visibility (Mandatory)
        - private
        - public
4. Built-in Validators should be used for form fields appropriately
5. Custom validators has to be created to check that video url is of valid pattern
   - Hint: Valid Url: https://www.youtube.com/embed/1ArVtCQqQRE
6. On clicking the save button, valid form should be submitted and a toast message stating that "Your video has been uploaded successfully" should be displayed

**Note: Do not modify/delete any of the other existing files/folders**


   


