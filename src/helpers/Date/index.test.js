/**
 * 
 */
import { getMonth } from ".";

describe("Date helper", () => {
    describe("When getMonth is called", () => {
        it("the function return janvier for 2022-01-01 as date", () => {
            // to implement
             // Arrange
             const date = new Date('2022-01-01');
            
             // Act
             const result = getMonth(date);
             
             // Assert
             expect(result).toBe('janvier');
        });
        it("the function return juillet for 2022-07-08 as date", () => {
            // to implement
             // Arrange
             const date = new Date('2022-07-08');
            
             // Act
             const result = getMonth(date);
             
             // Assert
             expect(result).toBe('juillet');
        });
    });
})

