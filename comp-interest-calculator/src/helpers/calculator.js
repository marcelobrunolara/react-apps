
    
function interestCalculator(amount, tax, installments){
    const factor = 1 + (tax/100);

    const newAmount = interestCompound(amount, factor, installments).toFixed(2);
    const totalInterest = calculateInterest(amount, newAmount);
    const difference = calculateDifference(newAmount, amount);
    
    return {amount, newAmount, totalInterest, difference};
}


function interestCompound(value, factor, installments) {
    for (let i = 0; i < installments; i++) 
            value *= factor;

    return value;
}

function calculateInterest(amount, newAmount){
    return (((newAmount/amount)-1) * 100).toFixed(2) + "%";
}

function calculateDifference(newAmount, amount){
    const diff = (newAmount - amount).toFixed(2);
    return diff;
}

export {interestCalculator}




