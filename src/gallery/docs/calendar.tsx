import * as React from "react"
import type { DateRange } from "react-day-picker"

import { Calendar } from "@/components/ui/calendar"
import { Example, Section } from "@/gallery/example"
import type { DocMeta } from "@/gallery/registry"

export const meta: DocMeta = {
  name: "Calendar",
  description: "Shows the days of a month. The user selects one date or a range of dates.",
  category: "Forms",
}

function CalendarSingleDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-2xl border"
    />
  )
}

function CalendarRangeDemo() {
  const today = new Date()
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: today,
    to: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 6),
  })

  return (
    <Calendar
      mode="range"
      selected={range}
      onSelect={setRange}
      className="rounded-2xl border"
    />
  )
}

function CalendarMultipleDemo() {
  const [dates, setDates] = React.useState<Date[] | undefined>([])

  return (
    <Calendar
      mode="multiple"
      selected={dates}
      onSelect={setDates}
      className="rounded-2xl border"
    />
  )
}

function CalendarDisabledDemo() {
  const [date, setDate] = React.useState<Date | undefined>()

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      disabled={{ dayOfWeek: [0, 6] }}
      className="rounded-2xl border"
    />
  )
}

export default function CalendarDocs() {
  return (
    <>
      <Section title="Selection" columns={2}>
        <Example title="One date" source="CalendarSingleDemo">
          <CalendarSingleDemo />
        </Example>
        <Example title="Date range" source="CalendarRangeDemo">
          <CalendarRangeDemo />
        </Example>
        <Example title="More than one date" source="CalendarMultipleDemo">
          <CalendarMultipleDemo />
        </Example>
        <Example title="Disabled weekends" source="CalendarDisabledDemo">
          <CalendarDisabledDemo />
        </Example>
      </Section>

      <Section title="Layout" columns={2}>
        <Example title="Month and year dropdowns">
          <Calendar captionLayout="dropdown" className="rounded-2xl border" />
        </Example>
        <Example title="Two months">
          <Calendar numberOfMonths={2} className="rounded-2xl border" />
        </Example>
        <Example title="Week numbers">
          <Calendar showWeekNumber className="rounded-2xl border" />
        </Example>
        <Example title="Outline buttons">
          <Calendar buttonVariant="outline" className="rounded-2xl border" />
        </Example>
      </Section>
    </>
  )
}
