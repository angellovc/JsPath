#!/usr/bin/env node
/*
    Observer pattern

    It is a behavioral patterns that consist in two different parts
    The subject and the observer.

    The subject will receive all the changes and effects of the programs,
    meanwhile, the object will be notified every time the subject
    is modified. Every time the subject chages, it wil send the changes
    to the observer
*/
/*
    Quee System example

    Imagine we have a quee system that
    shows the users which ticket number
    is being attending

    We want to show the ticket in many
    different screens, so we can
    subscribe the monitors (screens)
    to the quee system
*/
class TicketSystem {
    constructor() {
        this._tickets = [];
        this._monitors = [];
        this._ticketNumber = 0;
    }
    get tickets() {
        return this._tickets;
    }
    newTicket() {
        this._tickets.push(++this._ticketNumber);
    }
    next() {
        if (this._tickets.length === 0) {
            console.log('There is no available tickets');
            return;
        }
        this.notify(this._tickets[0]);
        this._tickets.splice(0, 1);
    }
    notify(data) {
        this._monitors.forEach(monitor => monitor.update(data));
    }
    subscribe(monitor) {
        this._monitors.push(monitor);
    }
    unsubscribe(unsubscriber) {
        const index = this._monitors.findIndex((monitor) => monitor === unsubscriber);
        this._monitors.splice(index, 1);
    }
}
class Monitor {
    constructor() {
        this._monitorNumber = ++Monitor._monitors;
    }
    update(data) {
        this._current = data;
        this.showCurrentTicket();
    }
    showCurrentTicket() {
        console.log(`Monitor: ${this._monitorNumber} | The ticket: ${this._current} is being attended`);
    }
}
Monitor._monitors = 0;
// Instanciating the subject
const system = new TicketSystem();
// Instanciating the Observers
const monitor1 = new Monitor();
const monitor2 = new Monitor();
// Subscribing the observers
system.subscribe(monitor1);
system.subscribe(monitor2);
/*
    Every time the system calls next function it automatically
    will inform the observers that there are a new user to be
    attended and that it is necessary to show it in the screen
*/
// preparing the tickets
system.newTicket();
system.newTicket();
system.newTicket();
system.newTicket();
system.newTicket();
system.next();
// If we ubsubscribe the monitor two
// when the system goes to the next
// ticket, it won't be notified
system.unsubscribe(monitor2);
console.log("Monitor2 unsubscribe");
system.next();
