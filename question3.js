function flattenAndUnique(nestedArray) {
    let result = [];

    for (const item of nestedArray) {

        if (Array.isArray(item)) {

            for (const value of item) {

                if (Array.isArray(value)) {

                    for (const num of value) {
                        if (!result.includes(num)) {
                            result.push(num);
                        }
                    }

                } else {

                    if (!result.includes(value)) {
                        result.push(value);
                    }

                }
            }

        } else {

            if (!result.includes(item)) {
                result.push(item);
            }

        }
    }

    return result;
}

const nestedArray = [1, [2, 3], 4, [2, [5, 1]], 3];
const result = flattenAndUnique(nestedArray);
console.log(result); 
