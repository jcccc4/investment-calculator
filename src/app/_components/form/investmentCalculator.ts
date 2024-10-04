import { Inputs } from "@/app/page";

export function investmentCalculator(data: Inputs, value: string = "yearly") {
  let endingBalance = data.startingAmount;
  let interest = 0;
  let deposit = data.startingAmount;
  const resultArr = [];
  let dataNumber = 1;

  for (let i = 0; i < data.after; i++) {
    let initial = endingBalance;
    for (let j = 0; j < 12; j++) {
      endingBalance *= (1 + data.returnRate / 100) ** (1 / 12);
      endingBalance += data.addOn;

      if (value === "monthly") {
        deposit += data.addOn;
        interest = endingBalance - initial - data.addOn ;
        resultArr.push({
          year: dataNumber++,
          deposit: deposit,
          interest: interest,
          endingBalance: endingBalance,
        });
        deposit = 0;
        initial = endingBalance;
      }
    }
    if (value === "yearly") {
      interest = endingBalance - initial - data.addOn * 12;

      resultArr.push({
        year: dataNumber++,
        deposit: deposit + data.addOn * 12,
        interest: interest,
        endingBalance: endingBalance,
      });
    }
    deposit = 0;
  }

  return resultArr;
}

