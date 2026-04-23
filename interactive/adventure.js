// interactive/adventure.js

class AdventureGame {
    constructor() {
        this.story = {};
        this.currentNode = '';
    }

    loadStory(story) {
        this.story = story;
        this.currentNode = 'start'; // starting point
    }

    getCurrentChoices() {
        return this.story[this.currentNode]?.choices || [];
    }

    makeChoice(choice) {
        const nextNode = this.story[this.currentNode]?.choices.find(c => c.text === choice);
        if (nextNode) {
            this.currentNode = nextNode.next;
            return this.getCurrentStory();
        }
        return 'Invalid choice, try again.';
    }

    getCurrentStory() {
        return this.story[this.currentNode]?.text || 'End of the story.';
    }
}

// Example of how the story could be structured:
const story = {  
    start: {  
        text: 'You are at a crossroad. Do you want to go left or right?',  
        choices: [  
            { text: 'left', next: 'leftPath' },  
            { text: 'right', next: 'rightPath' }  
        ]  
    },  
    leftPath: {  
        text: 'You went left and found a treasure!',  
        choices: []  
    },  
    rightPath: {  
        text: 'You went right and encountered a dragon!',  
        choices: []  
    }  
};  

const game = new AdventureGame();
game.loadStory(story);
console.log(game.getCurrentStory()); // Starting the game
