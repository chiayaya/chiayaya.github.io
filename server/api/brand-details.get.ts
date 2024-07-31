export default defineEventHandler(async (event) => {
  return {
    returnCode: "0000",
    message: "Successful",
    data: [
      {
        Id: 1,
        Name: "TESTO",
        Url: "urll",
        Reminder: "提醒您~",
        OrderCreationDays: 3,
        OrderConfirmationDays: 4,
        OrderPaymentDays: 5,
        Commissions: [
          {
            Name: "c1",
            Description: "d1",
            CommissionValue: 4.5,
            CommissionType: 1
          },
          {
            Name: "C4",
            Description: "d4",
            CommissionValue: 3.87,
            CommissionType: 1
          },
          {
            Name: "C5Fixed",
            Description: "d5",
            CommissionValue: 90,
            CommissionType: 2
          }
        ]
      }
    ]
  }
})
