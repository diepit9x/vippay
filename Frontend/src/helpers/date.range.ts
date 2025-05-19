import dayjs from 'dayjs';
export const FORMAT_DATE = 'YYYY-MM-DD';
export const FORMAT_DATE_VN = 'DD-MM-YYYY';
export const FORMAT_DATETIME_VN = 'DD/MM/YYYY HH:mm';
export const dateRangeValidate = (dateRange: any) => {
    if (!dateRange) return undefined;
    const startDate = dayjs(dateRange[0], FORMAT_DATE).toDate();
    const endDate = dayjs(dateRange[1], FORMAT_DATE).toDate();
    return [startDate, endDate];
};

export const datetimeFormat = (dateISO8601: string) => {
    return dayjs(dateISO8601).format(FORMAT_DATETIME_VN);
};
