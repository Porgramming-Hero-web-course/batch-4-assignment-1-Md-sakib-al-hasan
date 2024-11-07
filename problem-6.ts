{
    //


    interface Profile {
        name:string,
        age:number,
        email:string
    }

    let myProfile:Profile = { name: "Alice", age: 25, email: "alice@example.com" };


    // let updateProfile = (obj: Profile, updateObj: { [key in keyof Profile]?:Profile[key] }): Profile => {
    //     return { ...obj, ...updateObj };  
    // };

    let updateProfile = (obj: Profile, updateObj:Partial<Profile>): Profile => {
        return { ...obj, ...updateObj };  
    };
    

    const updatedProfile = updateProfile(myProfile, { age:26  });
    console.log(updatedProfile);
    //
}
