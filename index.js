







    function instagramPost(handleOfAuthor, content, imageLink,numberOfViews,numberOfLikes,) {
        this.handleOfAuthor = handleOfAuthor;
        this.content = content;
        this.imageLink = imageLink;
        this.numberOfViews = numberOfViews;
        this.numberOfLikes = numberOfLikes;
      }
      
      const post1 = new instagramPost("peter Danny", "", 18, 12);
      const post2 = new instagramPost("Gerald", "Oganwu", 20, 16);

      console.log(post1)
      console.log(post2)


      function createPerson(name, age, location) {
    return {
      name: name,
      age: age,
      location: location,
    };
  }
  
  
  const musa = createPerson("Musa Dawodu", 19, "Lekki,Lagos");
  console.log(musa)

  function createJambScore(Eng,Govt,Lit, Crk) {
    return {
        Eng:Eng,
        Govt:Govt,
        Lit:Lit,
        Crk:Crk,
    };
  }
  
  const score = createJambScore(70,85,82,94);
  console.log(score);



//   ways you can clone an object
const student = { name:"Musa", age:50,location:"Abuja",}

// 1 use the spread operator
const eg1 = {...student}
// 2 call the Object.assign()function
const eg2 = object.assign({},student)
// 3 use JSON parsing
const eg3 = JSON.parse(JSON.stringify(student))
// 4 use the structuredClone() function
const eg4 = structuredClone(student)