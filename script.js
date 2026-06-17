function indexOfIgnoreCase(s1, s2) {
  let s3 = s1.toLowerCase()
	let sub = s2.toLowerCase()
	if(s3.indexOf(sub)){
		return s3.indexOf(sub)
	} else {
		return -1
	}
}

// Please do not change the code below
const s1 = prompt("Enter s1:"); 
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
