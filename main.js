var victims = [];
var volunteers = [];


while(confirm("Would you like to add more victims? ")===true){
	
	vicName = prompt("Enter victim's Name: ");
	vicPhone = prompt("Enter victim's Phone #: ");
	vicStreet = prompt("Enter victim's Street: ");

	victims.push({name: vicName, phone: vicPhone, street: vicStreet});
}


while(confirm("Would you like to add more volunteers? ")===true){
	
	volName = prompt("Enter volunteer's Name: ");
	volPhone = prompt("Enter volunteer's Phone #: ");
	volStreet = prompt("Enter volunteer's Street: ");

	volunteers.push({name: volName, phone: volPhone, street: volStreet});
};

//LIST OF VICTIMS NAMES
var vicNames = [];

for(var i=0; i<victims.length; i++) {
	vicNames.push(victims[i].name);
};

//LIST OF VOLUNTEERS NAMES
var volNames = [];

for(var i=0; i<volunteers.length; i++) {
	volNames.push(volunteers[i].name);
};


//DISPLAY INFORMATION
alert(
	"Total persons in need: " + victims.length + "\n" +
	"Total volunteers available: " + volunteers.length + "\n" +
	"Victims: " + vicNames + "\n" +
	"Volunteers: " + volNames
);

//FIND PPL THAT CAN HELP ON THE SAME STREET
var vicNeed = prompt("Enter the name of a person in need: ");
var needSt;

for(var i=0; i<victims.length; i++) {
	if(vicNeed===victims[i].name){
		needSt = victims[i].street;
	};
};

var volAvail = [];

for(var i=0; i<volunteers.length; i++) {
	if(volunteers[i].street===needSt) {
		volAvail.push(volunteers[i].name);
	};
};

alert("Here are the people available to help on the same street: " + "\n" + volAvail);