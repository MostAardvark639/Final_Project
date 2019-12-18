let video;
let poseNet;
let poses = [];
let skeletons = [];
let m15
let positions = poses;
let spiderman_cave_in

//Images
let head

function preLoad(){
head = loadImage('FACEBOOK_PNG.png')
spiderman_cave_in = loadImage('spiderman_cave_in.jpg')
SPIDEY_MASK_PNG = loadImage('SPIDEY_MASK_PNG.png')
brother_jay = loadImage('brother_jay.png')
father = loadImage('father.png')
mother = loadImage('mother.png')
sister_noah = loadImage('sister_noah.png')
mask = loadImage('mask.png')

}


function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.size(width, height);

spiderman_cave_in = loadImage('spiderman_cave_in.jpg')
SPIDEY_MASK_PNG = loadImage('SPIDEY_MASK_PNG.png')
brother_jay = loadImage('brother_jay.png')
father = loadImage('father.png')
mother = loadImage('mother.png')
sister_noah = loadImage('sister_noah.png')
mask = loadImage('mask.png')



  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', function (results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  video.hide();
}

function modelReady() {
  select('#status').html('Model Loaded');

}

function draw() {
 background(0);
 //image(spiderman_cave_in, 0, 0, windowWidth, windowHeight);

  // We can call both functions to draw all keypoints and the skeletons
  drawKeypoints();
  drawSkeleton();


// }
// }
// }
	 if (poses.length > 0) {


	 	//image(img, x, y, [width], [height])
	 	// push()
	 	// imageMode(CENTER)
	 	//image(SPIDEY_MASK_PNG, poses[0].pose.nose.x, poses[0].pose.nose.y, (poses[0].pose.leftEar.x + poses[0].pose.rightEar.x) / 2, height)
	 	// pop()
		// print(poses[0].pose)

				beginShape();
				push()
				fill(255,0,0)
			
				// top of head
				vertex(poses[0].pose.nose.x, poses[0].pose.nose.y - 260);
				vertex((poses[0].pose.nose.x + poses[0].pose.rightEar.x) / 2, ((poses[0].pose.nose.y + poses[0].pose.nose.y) / 2) - 250)


				vertex(poses[0].pose.rightEar.x, poses[0].pose.rightEar.y);
				vertex((poses[0].pose.rightEar.x + poses[0].pose.nose.x) / 2, (poses[0].pose.rightEar.y + poses[0].pose.rightShoulder.y) / 2)
				//neck 
				vertex((poses[0].pose.rightShoulder.x + poses[0].pose.leftShoulder.x) / 2, (poses[0].pose.rightShoulder.y + poses[0].pose.leftShoulder.y) / 2 );
				vertex(poses[0].pose.rightShoulder.x - 100, poses[0].pose.rightShoulder.y);
				vertex(poses[0].pose.rightElbow.x - 50, poses[0].pose.rightElbow.y);
				vertex(poses[0].pose.rightWrist.x - 30, poses[0].pose.rightWrist.y -10);
				vertex(poses[0].pose.rightWrist.x + 40, poses[0].pose.rightWrist.y +20)
				vertex(poses[0].pose.rightElbow.x + 40, poses[0].pose.rightElbow.y);
				vertex(poses[0].pose.rightShoulder.x, poses[0].pose.rightShoulder.y +60);
				vertex(poses[0].pose.rightHip.x - 40, poses[0].pose.rightHip.y);
				vertex(poses[0].pose.rightKnee.x - 30, poses[0].pose.rightKnee.y);
				vertex(poses[0].pose.rightAnkle.x - 30, poses[0].pose.rightAnkle.y);
				vertex(poses[0].pose.rightAnkle.x + 30, poses[0].pose.rightAnkle.y);
				vertex(poses[0].pose.rightKnee.x + 30, poses[0].pose.rightKnee.y);
				vertex(poses[0].pose.rightHip.x + 40, poses[0].pose.rightHip.y + 20);
				vertex((poses[0].pose.rightHip.x + poses[0].pose.leftHip.x) / 2, (poses[0].pose.rightHip.y + poses[0].pose.leftHip.y) / 2 );
				
				//left side
				vertex(poses[0].pose.leftHip.x - 40 , poses[0].pose.leftHip.y);
				vertex(poses[0].pose.leftKnee.x - 40, poses[0].pose.leftKnee.y);
				vertex(poses[0].pose.leftAnkle.x - 30, poses[0].pose.leftAnkle.y);
				vertex(poses[0].pose.leftAnkle.x + 30, poses[0].pose.leftAnkle.y);
				vertex(poses[0].pose.leftKnee.x + 30, poses[0].pose.leftKnee.y);
				vertex(poses[0].pose.leftHip + 40, poses[0].pose.leftHip);
				vertex(poses[0].pose.leftShoulder.x, poses[0].pose.leftShoulder.y + 60); 
				vertex(poses[0].pose.leftElbow.x - 40, poses[0].pose.leftElbow.y);
				vertex(poses[0].pose.leftWrist.x - 40, poses[0].pose.leftWrist.y - 20);
				vertex(poses[0].pose.leftWrist.x + 40, poses[0].pose.leftWrist.y + 10);
				vertex(poses[0].pose.leftElbow.x + 40, poses[0].pose.leftElbow.y);
				vertex(poses[0].pose.leftShoulder.x + 30, poses[0].pose.leftShoulder.y);
				vertex((poses[0].pose.rightShoulder.x + poses[0].pose.leftShoulder.x) / 2, (poses[0].pose.rightShoulder.y + poses[0].pose.leftShoulder.y) / 2 );
				vertex((poses[0].pose.leftEar.x + poses[0].pose.nose.x) / 2, (poses[0].pose.leftEar.y + poses[0].pose.leftShoulder.y) / 2)

				// //head bits
				vertex(poses[0].pose.leftEar.x, poses[0].pose.leftEar.y);
		
				vertex((poses[0].pose.leftEar.x + poses[0].pose.nose.x) / 2, ((poses[0].pose.nose.y + poses[0].pose.nose.y) / 2) - 250);
				vertex(poses[0].pose.nose.x, poses[0].pose.nose.y - 260);
				
				pop()
				//outer box
				push()

				vertex(poses[0].pose.nose.x, poses[0].pose.nose.y - 2500);
				vertex(poses[0].pose.nose.x + 2500, poses[0].pose.nose.y - 2500);
				vertex(poses[0].pose.leftAnkle.x + 2500, poses[0].pose.leftAnkle.y + 2500);
				vertex(poses[0].pose.rightAnkle.x - 2500, poses[0].pose.rightAnkle.y + 2500);
				vertex(poses[0].pose.nose.x - 2500, poses[0].pose.nose.y - 2500);
				vertex(poses[0].pose.nose.x, poses[0].pose.nose.y - 2500);
				vertex(poses[0].pose.nose.x, poses[0].pose.nose.y - 260);


				pop()
				endShape(CLOSE);

				//ropes!
				push()
				strokeWeight(2)
				stroke(0)
				line(poses[0].pose.leftShoulder.x, poses[0].pose.leftShoulder.y, poses[0].pose.leftShoulder.x, 0)
				line(poses[0].pose.rightShoulder.x, poses[0].pose.rightShoulder.y, poses[0].pose.rightShoulder.x, 0)
				line(poses[0].pose.leftElbow.x, poses[0].pose.leftElbow.y, poses[0].pose.leftElbow.x, 0)
				line(poses[0].pose.rightElbow.x, poses[0].pose.rightElbow.y, poses[0].pose.rightElbow.x, 0)
				line(poses[0].pose.leftWrist.x, poses[0].pose.leftWrist.y, poses[0].pose.leftWrist.x, 0)
				line(poses[0].pose.leftAnkle.x, poses[0].pose.leftAnkle.y, poses[0].pose.leftAnkle.x, 0)
				line(poses[0].pose.rightAnkle.x, poses[0].pose.rightAnkle.y, poses[0].pose.rightAnkle.x, 0)
				line(poses[0].pose.leftKnee.x, poses[0].pose.leftKnee.y, poses[0].pose.leftKnee.x, 0)
				line(poses[0].pose.rightKnee.x, poses[0].pose.rightKnee.y, poses[0].pose.rightKnee.x, 0)

				pop()

				push()
				imageMode(CENTER)
				image(brother_jay, poses[0].pose.rightKnee.x, 1000, windowWidth / 3, windowHeight / 3)
				image(sister_noah, poses[0].pose.leftWrist.x, 1000, windowWidth / 3, windowHeight / 3)
				image(mother, poses[0].pose.rightWrist.x, 1000, windowWidth / 3, windowHeight / 3)
				image(father, poses[0].pose.leftKnee.x, 1000, windowWidth / 3, windowHeight / 3)
				pop()

		//TORSO
	//	beginShape();
		// vertex(poses[0].pose.leftShoulder.x, poses[0].pose.leftShoulder.y);
		// vertex(poses[0].pose.rightShoulder.x, poses[0].pose.rightShoulder.y);

		// vertex(poses[0].pose.leftHip.x, poses[0].pose.leftHip.y);
		// endShape(CLOSE);


	}
	}
// A function to draw ellipses over the detected keypoints
function drawKeypoints()  {
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i++) {
    // For each pose detected, loop through all the keypoints
    for (let j = 0; j < poses[i].pose.keypoints.length; j++) {
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
      let keypoint = poses[i].pose.keypoints[j];
      // Only draw an ellipse is the pose probability is bigger than 0.2
      if (keypoint.score > 0.2) {
        push()
        fill(88, 255, 116);
        noStroke();
        ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
        pop()
       // make sure we have data to work with
   		}
    // if (position.length > 0) {

        // // draw the data
        // let z = 0
        // while (z < position.length - 1) {
        //     ellipse(keypoints[z][0], keypoints[z][1], 4, 4)
        //     text(z, keypoints[z][0], keypoints[z][1])
        //     line(keypoints[z][0], keypoints[z][1], keypoints[z+1][0], keypoints[z+1][1])

        //     z += 1
        // 	}
  	  }
    }
  }
//}

// A function to draw the skeletons
function drawSkeleton() {
  // Loop through all the skeletons detected
  for (let i = 0; i < poses.length; i++) {
    // For every skeleton, loop through all body connections
    for (let j = 0; j < poses[i].skeleton.length; j++) {
      let partA = poses[i].skeleton[j][0];
      let partB = poses[i].skeleton[j][1];
      stroke(0)
      //stroke(88, 255, 116);
      line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
      
    }
  }
}
        // ALL BODY PARTS

        //------------------------------------------------

        // LEFT SIDE OF BODY|

        // LEFT HAND 

        // LEFT ARM

        // LEFT FOOT

        // LEFT LEG

        //------------------------------------------------

        // RIGHT SIDE OF BODY|

        // RIGHT HAND

        // RIGHT ARM

        // RIGHT FOOT

        // RIGHT LEG

        //------------------------------------------------

        // UPPER BODY

        // NECK

        // HEAD

        // LEFT EYE

        // RIGHT EYE

        //------------------------------------------------

        // MARRIONETTE SETUP

        //------------------------------------------------

        // 

