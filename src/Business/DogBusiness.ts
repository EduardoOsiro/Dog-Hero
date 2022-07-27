import { CustomError } from "../CustomError/CustomError";
import { DogWalkDTO } from "../Model/DogWalkClass";


export class DogBusiness {

     public async createWalk (input: DogWalkDTO) {
          try {
               
               const {date, duration, latitude, longitude, pets, start_time, end_time} = input

               if (!date || !duration || !latitude || !longitude || !pets || !start_time || !end_time) {
                    throw new CustomError(422, "Campos em branco.")
               }

          } catch (error: any) {
               
          }
     }
}