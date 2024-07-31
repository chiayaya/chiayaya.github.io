export default defineEventHandler(async (event) => {
  return {
    returnCode: "0000",
    message: "Successful",
    data: [
      {
        Id: 1,
        Name: "Klook",
        Logo: "",
        CommissionValue: 4.5,
        CommissionType: 1
      },
      {
        Id: 2,
        Name: "Klook",
        Logo: "",
        CommissionValue: 2,
        CommissionType: 1
      },
      {
        Id: 3,
        Name: "Klook",
        Logo: "",
        CommissionValue: 1,
        CommissionType: 1
      }
    ]
  }
})
