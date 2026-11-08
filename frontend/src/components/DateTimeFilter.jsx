import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"

import { options } from '@/lib/data'

const DateTimeFilter = ({ dateQuery, setDateQuery }) => {
  const optionValues = options.map((option) => option.value)

  return (
    <Combobox
      items={optionValues}
      value={dateQuery}
      onValueChange={setDateQuery}
      itemToStringLabel={(value) =>
        options.find((option) => option.value === value)?.label ?? value
      }
    >
      <ComboboxInput placeholder="Chọn khoảng thời gian" className='bg-white' />
      <ComboboxContent>
        <ComboboxList>
          {(value) => (
            <ComboboxItem key={value} value={value}>
              {options.find((option) => option.value === value)?.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

export default DateTimeFilter
