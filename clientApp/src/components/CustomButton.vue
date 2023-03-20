<template>
  <button>Create Form Shadow</button>
</template>

<style lang="scss" scoped>
@import '@/assets/main.scss';

button {
  background-color: $color-primary;
  color: $color-secondary;
  font-family: 'Nunito';
  font-size: 2rem;
  outline: none;
  border: none;
  width: 75%;
  max-width: 25rem;
  padding: 1rem;
  border-radius: 0.3rem;
  cursor: pointer;
  user-select: none;
  backface-visibility: hidden;
  transition: all 0.05s linear;

  &:active {
    transform: translateY(1px) scale(0.99);
  }

  @media (min-width: 500px) {
    &:hover {
      box-shadow: 0px 0px 40px -15px rgba($color-secondary, 0.7);
      transform: translateY(-2px) scale(1.01);
    }

    &:active {
      box-shadow: 0px 0px 30px -15px rgba($color-secondary, 0.7);
      transform: translateY(1px) scale(0.99);
    }
  }
}
</style>
