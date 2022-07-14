# BrainFlix API

## Overview
- Start the server with 
```
npm start 
```
- You can access the API via http://localhost:8080

## Routes
### GET `/videos`
- Returns an array of video objects 
- Contains only enough information to display in side bar
#### Response body example
```json
[
    {   
        "id": "1af0jruup5gu", 
        "title": "BMX Rampage: 2018 Highlights", 
        "channel": "Red Cow", 
        "image": "https://i.imgur.com/l2Xfgpl.jpg" 
    },
    { 
        "id": "1ainjruutd1j", 
        "title": "Become A Travel Pro In One Easy Lesson", 
        "channel": "Todd Welch", 
        "image": "https://i.imgur.com/5qyCZrD.jpg"
    }
]
```

### GET `/videos/:id`
- `:id` must be swapped out with the id of a video as found in the list of videos
- Returns a detailed object of a single video
    -  Details include the list of comments for that video
- Example response body
```json
{ 
        "id": "1af0jruup5gu",
        "title": "BMX Rampage: 2018 Highlights",
        "channel": "Red Cow",
        "image": "https://i.imgur.com/l2Xfgpl.jpg",
        "description": "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
        "views": "1,001,023",
        "likes": "110,985",
        "duration": "4:01",
        "video": "https://project-2-api.herokuapp.com/stream",
        "timestmp": 1545162149000,
        "comments": [
            {
                "name": "Micheal Lyons",
                "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of concert I have EVER witnessed.",
                "id": "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
                "likes": 0,
                "timestamp": 1545162149000
            },
            {
                "name": "Gary Wong",
                "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
                "id": "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
                "likes": 0,
                "timestamp": 1544595784046
            },
            {
                "name": "Theodore Duncan",
                "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
                "id": "993f950f-df99-48e7-bd1e-d95003cc98f1",
                "likes": 0,
                "timestamp": 1542262984046
            }
        ] 
    }
```

### POST `/videos`
- Creates a new video with user input of title and description.
- Other fields will be automatically generated with placeholder values
#### Post body example
```
{
	"title": "I love my dog",
	"description": "Checkout this fluffer"
}
```
#### Response body example
- Additional fields will be autofilled with random placeholder values
```
{
        "title": "I love my dog",
        "channel": "Random Trisha",
        "image": "https://i.imgur.com/CQFK71Q.jpeg",
        "description": "Checkout this fluffer",
        "views": "0",
        "likes": "0",
        "duration": "25:44",
        "video": "https://project-2-api.herokuapp.com/stream",
        "timestamp": 1657814034175,
        "comments": [],
        "id": "b9bd9aa4-fcbf-4348-b79d-6b335d345ff3"
    }
```
