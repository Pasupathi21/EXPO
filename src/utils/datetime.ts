import * as  moment from "moment"

export const currentDate = (format: string)=> moment(new Date()).utcOffset("+5:30").format(format)