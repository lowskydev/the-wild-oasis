/* eslint-disable react/prop-types */
import { formatCurrency } from "../../utils/helpers";
import Stat from "./Stat";
import {
  HiOutlineBriefcase,
  HiOutlineBanknotes,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  // 1. Number of bookings
  const numBookings = bookings.length;

  // 2. Total sales
  const sales = bookings.reduce(
    (total, booking) => booking.totalPrice + total,
    0
  );

  // 3. Number of check ins
  const checkIns = confirmedStays.length;

  // 4. Rate of occupancy
  // checked in nights / all availlable nights (cabins * days)
  const occupation = confirmedStays.reduce(
    (nights, curStay) => curStay.numNights + nights,
    0
  );
  const allNights = numDays * cabinCount;
  const occupancyRate = (occupation / allNights) * 100;

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />

      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />

      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkIns}
      />

      <Stat
        title="Occupancy Rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupancyRate) + "%"}
      />
    </>
  );
}

export default Stats;
