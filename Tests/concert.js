export class Concert{
    constructor(concertName, artist, trailer, date){
        this.concertName = concertName
        this.artist = artist
        this.trailer = trailer
        this.date = date
    }
    display(){
        return `${this.concertName} | ${this.artist} > ${this.trailer} ${this.date}`
    }
}