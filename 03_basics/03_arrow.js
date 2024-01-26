const user={
    username:"shrish",
    price:999,
    welcomeMessage:function() {
        console.log(`${this.username},Welcome to Website`);
    }

}

// user.welcomeMessage() //shrish,Welcome to Website

// user.username="shiva" //context changed

// user.welcomeMessage()//shiva,Welcome to Website

// console.log(this);

// console.log();

function chai(){
    console.log(this);
}

chai()