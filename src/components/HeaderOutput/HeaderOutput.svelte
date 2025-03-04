<div class="header-output">
  <div class="wrapper single">
    <div class="lamp big blue"></div>
  </div>

  <div class="wrapper multiple">
    <div class="lamp small red"></div>
    <div class="lamp small yellow"></div>
    <div class="lamp small green"></div>
  </div>
</div>

<style lang="postcss">
.header-output {
  display: flex;
  gap: 16px;
  border-radius: 0 0 64px 0;
  padding: 8px 24px 16px 8px;
  border-width: 0 6px 6px 0;
  border-style: solid;
  border-color: var(--plastic-color-2);
  background-color: var(--plastic-color-1);

  .wrapper {
    display: flex;
    justify-content: center;
    gap: 8px;

    &.single {
      align-items: flex-start;
    }

    &.multiple {
      align-items: flex-start;
    }

    .lamp {
      border-radius: 50%;

      &.big {
        width: 50px;
        height: 50px;
        border: 3px solid var(--neutral-color-2);
      }

      &.small {
        width: 12px;
        height: 12px;
        border: 1px solid var(--neutral-color-2);
      }
      
      &.blue {
        background: 
          linear-gradient(145deg, var(--neutral-color-1), 40%, var(--glass-color-1));
      }

      &.red {
        background: 
          linear-gradient(145deg, var(--neutral-color-1), 25%, var(--status-color-1));
      }
    
      &.yellow {
        background: 
          linear-gradient(145deg, var(--neutral-color-1), 25%, var(--status-color-2));
      }
      
      &.green {
        background: 
          linear-gradient(145deg, var(--neutral-color-1), 25%, var(--status-color-3));
      }
    }
  }
}
</style>