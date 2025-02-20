<main class="pokedex">
  <div class="pokedex-header">
    <div class="header-display">
      <div class="display-sphere">
        <div class="sphere-circle"></div>
      </div>

      <div class="display-signal">
        <div class="signal-circle"></div>
        <div class="signal-circle"></div>
        <div class="signal-circle"></div>
      </div>
    </div>

    <div class="header-content">
      <input type="text" title="pesquisar" class="content-search" />
    </div>
  </div>

  <div class="pokedex-frame">
    <div class="frame-content"></div>
  </div>
</main>

<style>
.pokedex {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: var(--plastic-color-1);
}

  .pokedex-header {
    display: flex;
    border-radius: 0 8px 0 0;
  }

    .header-display {
      display: flex;
      gap: 16px;
      border-radius: 0 0 64px 0;
      padding: 8px 24px 16px 8px;
      border-width: 0 6px 6px 0;
      border-style: solid;
      border-color: var(--plastic-color-2);
      background-color: var(--plastic-color-1);
    }

      .display-sphere {
        width: 50px;
        height: 50px;
        padding: 3px;
        border-radius: 50%;
        background-color: var(--neutral-color-2);
      }

        .sphere-circle {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: var(--glass-color-1);
          background: radial-gradient(circle, var(--neutral-color-1) 0%, var(--glass-color-1) 75%);
        }

      .display-signal {
        display: flex;
        align-items: flex-start;
        gap: 8px;
      }

        .signal-circle {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 1px solid var(--neutral-color-2);
        }

          .signal-circle:nth-child(1) {
            background: radial-gradient(circle, var(--neutral-color-1) 0%, var(--status-color-1) 75%);
          }

          .signal-circle:nth-child(2) {
            background: radial-gradient(circle, var(--neutral-color-1) 0%, var(--status-color-2) 75%);
          }

          .signal-circle:nth-child(3) {
            background: radial-gradient(circle, var(--neutral-color-1) 0%, var(--status-color-3) 75%);
          }

    .header-content {
      flex-grow: 1;
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
      padding: 0 16px 8px 16px;
      border-radius: 0 8px 0 0;
      border-width: 6px 1px 0 0;
      border-style: solid;
      border-color: var(--plastic-color-2);
    }

      .content-search {
        width: 100%;
        max-width: 280px;
        height: 45px;
        padding: 8px 16px;
        font-size: 1.45rem;
        color: var(--screen-color-2);
        outline: none;
        border-radius: 4px;
        border: 1px solid var(--plastic-color-2);
        background-color: var(--screen-color-1);
      }

  .pokedex-frame {
    flex-grow: 1;
    display: flex;
    padding: 16px;
    border-radius: 0 0 8px 8px;
    border-width: 0 1px 1px 6px;
    border-style: solid;
    border-color: var(--plastic-color-2);
  }

    .frame-content {
      flex-grow: 1;
      border-radius: 8px;
      border: 1px solid var(--plastic-color-2);
      background-color: var(--neutral-color-2);
    }
</style>
