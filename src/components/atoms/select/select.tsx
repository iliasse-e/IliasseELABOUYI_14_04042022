interface SelectType {
  options: any
  name: string
}

/**
 * Renders select atomic element with as much options joint in params
 * @param options : Array gathering contents of options
 * @param name : select name and id content
 * @returns {JSX.Element} select
 */
export const Select: React.FC<SelectType> = ({
  options,
  name,
}): JSX.Element => {
  const selectItems = options.map(
    (option: { label: string; value: string }) => (
      <option key={option.value} value={option.value}>
        {option.value}
      </option>
    )
  )

  const handleChange = () => {
    console.log('fruit selected')
  }

  return (
    <select value={'apple'} name={name} id={name} onChange={handleChange}>
      {selectItems}
    </select>
  )
}
