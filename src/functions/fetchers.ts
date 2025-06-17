export namespace installs {
  export function npm(name: string) {
    return async () => {
      return fetch(
        `https://api.npmjs.org/downloads/point/1970-01-01:2100-01-01/${name}`,
      )
        .then((r) => r.json())
        .then((r) => Number(r.downloads));
    };
  }

  export function millennium(id: string) {
    return async () => {
      return fetch(`https://steambrew.app/api/v1/plugin/${id}`)
        .then((r) => r.json())
        .then((r) => Number(r.downloadCount));
    };
  }
}

export namespace likes {
  export function github(repo: string) {
    return async () => {
      return fetch(`https://img.shields.io/github/stars/${repo}.json`)
        .then((r) => r.json())
        .then((r) => Number(r.message.replace('k', '000')));
    };
  }
}
