import s from './style.module.css'

export function DisplayInteractiveImage({imageSrc}) {
  return (
    <div className={s.container}>
      <img src={imageSrc ? imageSrc : ''} alt='' style={{width: '100%'}} />
    </div>
  )
}
