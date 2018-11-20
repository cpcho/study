//Factory Functions
//https://youtu.be/ImwrezYhw4w

const dog = () => {
    const sound = 'woof';
    return {
        talk: () => console.log(sound)
    }
}

const sniffles = dog();
sniffles.talk() // "woof"