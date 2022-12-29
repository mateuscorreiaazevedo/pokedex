export const maskIdImage = (id: number) => {
  if (id < 10) {
    return `00${id}`
  } else if (id > 9 && id < 100) {
    return  `0${id}`
  } else {
    return id
  }
}
