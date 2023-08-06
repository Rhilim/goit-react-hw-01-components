import { StatTitle } from "./StatisticsTitle.styled";


export const StatisticsTitle = ({title}) => {
    return (
        title.length > 0 && <StatTitle>{title}</StatTitle>
    );
};