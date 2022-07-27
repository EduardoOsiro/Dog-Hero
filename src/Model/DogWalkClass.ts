

export default class DogWalk {
     constructor (
          private id: string,
          private status: string,
          private date: string,
          private price: number,
          private duration: string,
          private latitude: string,
          private longitude: string,
          private pets: string,
          private start_time: string,
          private end_time: string
     ) {}

     public getId = () => this.id
     public getStatus = () => this.status
     public getDate = () => this.date
     public getPrice = () => this.price
     public getDuration = () => this.duration
     public getLatitude = () => this.latitude
     public getLongitude = () => this.longitude
     public getPets = () => this.pets
     public getStartTime = () => this.start_time
     public getEndTime = () => this.end_time
}

export interface DogWalkDTO {
     date: string,
     duration: string,
     latitude: string,
     longitude: string,
     pets: string,
     start_time: string,
     end_time: string

}

