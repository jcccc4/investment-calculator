import { Data, Inputs } from "@/app/page";
import { formatCurrency } from "./formatters";

export function investmentCalculator(
  data: Inputs,
  frequency: string = "yearly"
) {
  let endingBalance = data.startingAmount;
  let totalDeposit = data.startingAmount;
  let yearlyInterest = 0;
  const resultArr: Data[] = [];
  let compound = 1;
  switch (data.compound) {
    case "Annually":
      compound = 1;
      break;
    case "Semiannually":
      compound = 2;
      break;
    case "Quarterly":
      compound = 4;
      break;
    case "Monthly":
      compound = 12;
      break;
    default:
      break;
  }

  for (let month = 0; month < data.after * 12; month++) {
    endingBalance = Number(endingBalance);
    const initialBalance = endingBalance;

    let interestEarned = 0;
    if (data.type == "Beginning") {
      if (data.each == "Month") {
        endingBalance += data.addOn;
        interestEarned -= data.addOn;
      } else if (data.each == "Year" && (month + 1) % 12 == 0) {
        endingBalance += data.addOn;
        interestEarned -= data.addOn * 12;
      }
    }
    // Calculate monthly compounding interest
    endingBalance *= (1 + data.returnRate / compound / 100) ** (compound / 12);
    interestEarned += endingBalance - initialBalance;
    yearlyInterest += interestEarned;

    // Add on the additional investment
    if (data.type == "End") {
      if (data.each == "Month") {
        endingBalance += data.addOn;
      } else if (data.each == "Year" && (month + 1) % 12 == 0) {
        endingBalance += data.addOn;
      }
    }

    if (data.each == "Month") {
      totalDeposit += data.addOn;
    } else if (data.each == "Year" && (month + 1) % 12 == 0) {
      totalDeposit += data.addOn;
    }

    switch (frequency) {
      case "monthly":
        resultArr.push({
          year: month + 1,
          deposit: formatCurrency(totalDeposit),
          interest: formatCurrency(interestEarned),
          endingBalance: formatCurrency(endingBalance),
        });
        totalDeposit = 0;
        break;
      case "yearly":
        if ((month + 1) % 12 == 0) {
          resultArr.push({
            year: (month + 1) / 12,
            deposit: formatCurrency(totalDeposit),
            interest: formatCurrency(yearlyInterest),
            endingBalance: formatCurrency(endingBalance),
          });
          yearlyInterest = 0;
          totalDeposit = 0;
        }

        break;
      default:
        break;
    }
  }

  return resultArr;
}
