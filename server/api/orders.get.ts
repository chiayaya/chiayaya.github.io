export default defineEventHandler(async (event) => {
  return {
    returnCode: "0000",
    message: "Successful",
    data: [
      {
        Id: 6,
        BrandName: "TESTN",
        ExternalOrderNumber: "TEST003",
        StatusId: 6,
        Status: "已入點",
        OrderCreationDate: "2024-07-01T00:00:00",
        EdenPoints: 8,
        ConfirmDays: 45
    },
    {
        Id: 4,
        BrandName: "TESTN",
        ExternalOrderNumber: "TEST002",
        StatusId: 3,
        Status: "確認訂單",
        OrderCreationDate: "1990-01-01T00:00:00",
        EdenPoints: 0,
        ConfirmDays: 45
    }
    ]
  }
})
