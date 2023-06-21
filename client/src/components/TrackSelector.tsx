import Modal from './Modal'
import { useRootStore } from '../store/rootStore'
import Card from './Card'
import { observer } from 'mobx-react'

interface Props {
  onClose?: () => void
}

const TrackSelector = ({ onClose }: Props) => {
  const { trackStore } = useRootStore()

  return (
    <Modal title={'track selection'} onClose={onClose}>
      <div className="h-full w-full p-4 grid gap-x-4 gap-y-4 grid-cols-fluid overflow-y-scroll">
        {trackStore.tracks.map((track) => (
          <Card
            key={track.id}
            id={track.id}
            src={track.thumbnailUrl}
            text={track.title}
            handleClick={trackStore.setCurrentTrack}
            isSelected={track.id === trackStore.currentTrack.id}
          />
        ))}
      </div>
    </Modal>
  )
}

export default observer(TrackSelector)
