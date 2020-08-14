// Require the packages we will use:
var http = require("http"),
socketio = require("socket.io"),
fs = require("fs");

// Listen for HTTP connections.  This is essentially a miniature static file server that only serves our one file, client.html:
var app = http.createServer(function(req, resp){
	// This callback runs when a new connection is made to our HTTP server.

	fs.readFile("static/client.html", function(err, data){
		// This callback runs when the client.html file has been read from the filesystem.

		if(err) return resp.writeHead(500);
		resp.writeHead(200);
		resp.end(data);
	});
});
app.listen(1337);


var uniqueIDList = [];
var locations = [];


var loc1 = {location:"Airplane", roles:["1st Class Passenger","Air Marshall","Attendant","Pilot","Co-Pilot","Stewardess","Flight Attendant", "Economy Passenger"]};
var loc2 = {location:"Bank", roles:["Teller","Rich Client","Poor Client", "Bank Manager", "Security Guard", "Teller","Assistant Manager"]};
var loc3 = {location:"Beach", roles:["Dad on Vacation","Child on Vacation","Lifeguard", "Kite Surfer", "Lifeguard", "Metal Detector Guy", "Mom on Vacation", "Surfer"]};
var loc4 = {location:"Cathedral", roles:["Priest","Sinner","Big Donor", "Chorister", "Organist", "Nun", "Nun", "Priest"]};
//var loc5 = {location:"Our Office", roles:["Greg","Jeremy","Jess", "Adi", "Michelle", "Laura","Andrea","Hannes"]};
//var loc6 = {location:"Greg's House", roles:["Mike","Greg","Devin", "Scott", "Jordan", "Pierce", "Wendy", "Gary"]};
var loc7 = {location:"Circus", roles:["Acrobat","Lion Tamer","Fire Eater", "Fire Walker", "Clown", "Juggler", "Ringmaster", "Clown"]};
var loc8 = {location:"Corporate Party", roles:["Assistant Manager","CEO","Janitor", "Secretary", "Accountant", "Guest of Employee", "Bartender", "Sales Person"]};
var loc9 = {location:"Crusader Army", roles:["Bishop","Squire","Archer", "Knight", "Prisoner", "Servant", "Archer", "Knight"]};
var loc10 = {location:"Casino", roles:["Bartender","Security Guard","Dealer", "Bouncer", "Gambler", "Hustler", "Dealer", "Casino Owner"]};
var loc11 = {location:"Day Spa", roles:["Stylist","Masseuse","Manicurist", "Beautician", "Customer", "Frequent Customer", "Masseuse", "Stylist"]};
var loc12 = {location:"Embassy", roles:["Ambassador","Foreign Ambassador","Diplomat", "Visitor", "Government Official", "Translator", "Dipomat", "Ambassador"]};
var loc13 = {location:"Hospital", roles:["Nurse","Doctor","Resident", "Patient", "Surgeon", "Mortician", "Doctor", "Resident"]};
var loc14 = {location:"CIA Secret Base", roles:["Spy","Four-Star General","Weapons Engineer", "Spy", "KGB Undercover Spy", "Imprisoned Spy", "Commander", "Spy"]};
var loc15 = {location:"Hotel", roles:["Valet","Doorman","Manager", "Cleaning Staff Employee", "Customer", "Bellman", "Customer", "Bellman"]};
var loc16 = {location:"Movie Studio", roles:["Stunt Man","Sound Engineer","Director", "Camera Man", "Actor", "Producer", "Actress", "Writer"]};
var loc17 = {location:"Ocean Liner", roles:["Cook","Captain","Bartender", "Mechanic", "Rich Passenger", "Musician", "Co-Captain", "Mechanic"]};
var loc18 = {location:"Passenger Train", roles:["Passenger","Conductor","Attendant", "Mechanic", "Security Guard", "Passenger", "Attendant", "Passenger"]};
var loc19 = {location:"Pirate Ship", roles:["Cook","Cannoneer","Prisoner", "Brave Captain", "Sailor", "First Mate", "Sailor", "Cannoneer"]};
var loc20 = {location:"Polar Station", roles:["Medic","Expedition Leader","Biologist", "Radioman", "Meteorologist", "Geologist", "Chemist", "Geologist"]};
var loc21 = {location:"Police Station", roles:["Detective","Journalist","Criminalist", "Parole Officer", "Detained Criminal", "Archivist", "Detective", "Criminalist"]};
var loc22 = {location:"Restaurant", roles:["Head Chef","Sous Chef","Waitress", "Customer", "Waiter", "Hostess", "Customer", "Waiter"]};
var loc23 = {location:"High School", roles:["Teacher","Principal","Janitor", "Cafeteria Lady", "Student", "Teacher", "Superintendent", "Student"]};
var loc24 = {location:"Service Station", roles:["Manager","Car Owner","Mechanic", "SUV Owner", "Assistant Manager", "Head Mechanic", "Car Owner", "Mechanic"]};
var loc25 = {location:"Space Station", roles:["Engineer","Pilot","Commander", "Scientist", "Medic", "Astronomer", "Scientist", "Co-Pilot"]};
var loc26 = {location:"Submarine", roles:["Cook","Commander","Sonar Technician", "Radioman", "Navigator", "Mechanic","Navigator","Medic"]};
var loc27 = {location:"Supermarket", roles:["Cashier","Butcher","Janitor", "Food Sample Demonstrator", "Shelf Stocker", "Customer", "Customer", "Shelf Stocker"]};
var loc28 = {location:"Theater", roles:["Coat Checker","Actor","Actress", "Crew Man", "Audience Member", "Prompter", "Director", "Actor"]};
var loc29 = {location:"University", roles:["Graduate Student","Professor","Dean", "Undergraduate Student", "Book Store Manager", "Janitor", "Professor", "Student"]};
var loc30 = {location:"WWII Squad", roles:["Resistance Fighter","Radioman","Scout", "Prisoner", "Soldier", "Medic", "Scout", "Soldier"]};
var loc31 = {location:"Zoo", roles:["Dophin Trainer","Zoo Owner","Visitor", "Veterinarian", "Animal Curator", "Researcher", "Visitor", "Veterinarian"]};
var loc32 = {location:"Gryffindor Common Room", roles:["Hermoine","Ron","Harry Potter", "Dean Thomas", "Neville", "McGonagall", "James Potter", "Albus Dumbledore"]};
// var loc33 = {location:"Super Smash Brothers Course", roles:["Kirby","Samus","Pikachu", "Mario", "Link", "Ness", "Luigi", "Yoshi"]};
var loc34 = {location:"Jail", roles:["White-Collar Criminal","Security Guard","Thief", "Arsonist", "Gang Affiliate", "Wardon", "Arsonist","Security Guard"]};
var loc35 = {location:"Salem Witch Trial", roles:["Accused Witch","Judge","Town Mayor", "Actual Witch", "Executioner", "Person In The Angry Mob", "Person In The Angry Mob","Person In The Angry Mob"]};
var loc36 = {location:"Busy Street", roles:["Pedestrian","Panhandler","Angry Driver", "Police Officer", "Lost Kitten", "Pedestrian", "Chef on Break","Pedestrian"]};



locations.push(loc1);
locations.push(loc2);
locations.push(loc3);
locations.push(loc4);
//locations.push(loc5);
//locations.push(loc6);
locations.push(loc7);
locations.push(loc8);
locations.push(loc9);
locations.push(loc10);
locations.push(loc11);
locations.push(loc12);
locations.push(loc13);
locations.push(loc14);
locations.push(loc15);
locations.push(loc16);
locations.push(loc17);
locations.push(loc18);
locations.push(loc19);
locations.push(loc20);
locations.push(loc21);
locations.push(loc22);
locations.push(loc23);
locations.push(loc24);
locations.push(loc25);
locations.push(loc26);
locations.push(loc27);
locations.push(loc28);
locations.push(loc29);
locations.push(loc30);
locations.push(loc31);
locations.push(loc32);
// locations.push(loc33);
locations.push(loc34);
locations.push(loc35);
locations.push(loc36);




// Do the Socket.IO magic:
var io = socketio.listen(app);
io.sockets.on("connection", function(socket){
	// This callback runs when a new Socket.IO connection is established.
	console.log("user is connected!");
	var uniqueID = socket.id;
	uniqueIDList.push(uniqueID);
	console.log("woah!!!!" + uniqueIDList);
	io.to(uniqueID).emit('give_user_socket_ID', {uniqueID:uniqueID});

	// give list
	var locationList = [];
	for (var x=0; x<locations.length; x++){
		locationList.push(locations[x].location);

	}
	console.log(locationList);
	io.to(uniqueID).emit("give_location_list", {locationList:locationList});

	socket.on('create_user', function(data){
		userObjects.push(data);
		console.log(data.message.name + " aka " + data.message.uniqueID + " joined the lobby with a color of " + data.message.color);
		io.sockets.emit("update_chatroom_list", {message:chatroomObjects, userList:userObjects});

	});


	socket.on('start_new_game', function(data){

		console.log("----request to start a new game with " + uniqueIDList.length + " users------");

		var locationNumber = Math.floor(Math.random() * locations.length);
		console.log(locationNumber + " is the location to be played");

		console.log("current players: " + uniqueIDList);

		var spyNumber = Math.floor(Math.random() * uniqueIDList.length);
		console.log(spyNumber + " is the spy");

		var rolesAllowed = [];
		for (var j=0; j< locations[locationNumber].roles.length; j++){
			rolesAllowed.push(locations[locationNumber].roles[j]);
		}
		console.log("the available roles are " + rolesAllowed);


		for (var i=0; i<uniqueIDList.length; i++){
			if (i === spyNumber){
				io.to(uniqueIDList[i]).emit('notify_spy', {});
			} else {
				var roleNumber = Math.floor(Math.random() * rolesAllowed.length);
				var userRole = rolesAllowed[roleNumber];
				rolesAllowed.splice(roleNumber, 1);

				io.to(uniqueIDList[i]).emit('notify_not_spy', {location : locations[locationNumber].location, role: userRole});
			}
		}

		// io.sockets.emit("update_chatroom_list", {message:chatroomObjects, userList:userObjects});


	});




socket.on('disconnect', function () {
	console.log(socket.id + " left the site!");
	for (var i=0; i<uniqueIDList.length; i++){
		if (uniqueIDList[i] === socket.id){
			uniqueIDList.splice(i, 1);
		}
	}
			// console.log("woah!!!!" + uniqueIDList);
				// get rid of their object and remove them from the group they are in, etc. do updates
			});

});
