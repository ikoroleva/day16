class Bus {
    constructor(direction, stations, seats, passengers, last_station) {
        this.direction = direction;
        this.stations = stations;
        this.seats = seats;
        this.passengers = passengers;
        this.last_station = last_station;
    }
    //returns the name of the station the bus last stopped in
    current() {
        return this.stations[this.last_station];
    }
    //sets the last_station index to the next station,
    next() {
        if (this.last_station < this.stations.length - 1) {
            return this.stations[this.last_station + 1];
        } else {
            return this.stations[this.stations.length - 1];
        }

    }
    //board count new passengers to the bus. If the number of passengers would be greater the number of seats after calling this method, just board only as many to fit in the bus.
    board(count) {

        if (this.passengers + count <= this.seats) {
            this.passengers += count;
            return count;
        }
        const newPassengers = this.seats - this.passengers;
        this.passengers += newPassengers;
        return newPassengers;
    }
    //deboard count passengers from the bus. If the count is greater then the number of passengers on the bus just deboard those that are inside.
    deboard(count) {

        if (this.passengers < count) {
            const oldPassengers = this.passengers;
            this.passengers = 0;
            return oldPassengers;
        }

        this.passengers -= count;
        return count;
    }



}


export { Bus }