export type PronunciationSwitcherPropsType = {
  state: string
  changeState: any
}

const PronunciationSwitcher: React.FC<PronunciationSwitcherPropsType> = ({ state, changeState }) => {
  return (
    <div className="flex items-center justify-center space-x-3">
      <div>
        <select
          value={state}
          onChange={(e) => {
            changeState(e.target.value)
            e.target.blur()
          }}
        >
          <option value="false">关闭发音</option>
          <option value="us">美式发音</option>
          <option value="uk">英式发音</option>
        </select>
      </div>
    </div>
  )
}

export default PronunciationSwitcher
