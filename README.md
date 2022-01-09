# work-day-scheduler

This time around, I applied the concepts of: API use (like Moment.js), event delegation, Bootstrap component usage, and DOM manipulation via jQuery in this assignment. Looking at previous in-class activities helped me understand the syntax for event delegation and using event.target to select elements.

![alt text](/images/screenshot-1.png)

This page works as a day planner during work hours 8am to 5pm. Currently the time slots are labeled in military time. I will explain why this is the case further below. I used a text area from the 'Input group' Bootstrap section. This looked closest to the time slots in the reference image. To create the lock button on the end, I took inspiration from the input-group-append div from the $ input field above.

![alt text](/images/screenshot-2.png)

To get the text areas to change their backgrounds--depending on the time of day--I created a function that is called within the SetInterval function. This function uses a for loop to check each time slot, and to see if the current time is before, within, or after the mentioned time slot. 

This is why each time label is in military time. I use the text content from each label to compare with the current time. From there, the class of the text area is changed so that it either includes past, present, or future. This triggers the prewritten css styling for each class.

![alt text](/images/screenshot-3.png)

To get the Lock button to work, I created an event listener with jQuery. This allowed me to use event delegation to assign the listener to the lock button class. The only other way I could see achieving this would be to add an event listener for each lock button explicitly but that's more tedious.

Once the button is pressed, the function checks if disabled attribute already exists. If it doesn't, then it sets that as true and changes the lock button text to 'Unlock'. If it does already exist, then the disabled attribute is removed and the button text is changed back to 'Lock'.

![alt text](/images/screenshot-4.png)
