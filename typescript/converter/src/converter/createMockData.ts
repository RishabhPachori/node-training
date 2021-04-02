// generates fake input or output data for ease of testing
import faker from 'faker'
import Chance from 'chance'
import _ from 'lodash'

const chance = new Chance()  

interface employeeDataInterface{
    id: string,
    first_name: string,
    last_name: string,
    age: number,
    job_title: string,
    experience: number
}

/**
 * Method for generating the fake employee json data
 */
const createMockData = (): employeeDataInterface[]=>{
    
    const createEmployeeData = (): employeeDataInterface=>{
        const employeeData: employeeDataInterface = {
            id: faker.random.uuid(),
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            age: chance.age(),
            job_title: faker.name.jobTitle(),
            experience: faker.random.number({min: 0, max: 10})
        }
        return employeeData
    }
    
    const createMulitipleEmployeeData: employeeDataInterface[] = _.times(200, createEmployeeData)

    const dataCleaned: employeeDataInterface[] = createMulitipleEmployeeData.filter((data) => {
		const currentExperience: number = data.experience
        const result: boolean = 0 < currentExperience && currentExperience < 10
		return result
    })
    
    var result: employeeDataInterface[] = _.chain(dataCleaned)
		.orderBy(( data ) => data.experience)
        .value()

    return result
}

export default createMockData