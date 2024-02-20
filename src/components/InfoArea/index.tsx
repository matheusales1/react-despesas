import * as C from './styles'
import { formatCurrentMonth } from '../../helpers/dateFilter'
import { ResumeItem } from '../ResumeItem';

type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}

export const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {
    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currenteDate = new Date(parseInt(year), parseInt(month) - 1, 1)
        currenteDate.setMonth(currenteDate.getMonth() - 1);
        onMonthChange(`${currenteDate.getFullYear()}-${currenteDate.getMonth() + 1}`)
    }
    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currenteDate = new Date(parseInt(year), parseInt(month) - 1, 1)
        currenteDate.setMonth(currenteDate.getMonth() + 1);
        onMonthChange(`${currenteDate.getFullYear()}-${currenteDate.getMonth() + 1}`)
    }

    return (
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
                <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
                <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
            </C.MonthArea>
            <C.ResumeArea>
                <ResumeItem title="Receitas" value={income} />
                <ResumeItem title="Despesas" value={expense} />
                <ResumeItem title="Balanço" value={income - expense} color={income - expense < 0 ? 'red' : 'green'} />
            </C.ResumeArea>
        </C.Container>

    )
}