{ pkgs, ... }: {

  channel = "stable-23.11";

  packages = [
    pkgs.nodejs_20
  ];

  idx.extensions = [
    "aaron-bond.better-comments",
    "chrisbibby.hide-node-modules",
    "christian-kohler.npm-intellisense",
    "dbaeumer.vscode-eslint",
    "mikestead.dotenv",
    "eamodio.gitlens",
    "EditorConfig.EditorConfig",
    "esbenp.prettier-vscode",
    "Gruntfuggly.todo-tree",
    "formulahendry.auto-rename-tag",
    "liamhammett.inline-parameters",
    "lokalise.i18n-ally",
    "meganrogge.template-string-converter",
    "mhutchie.git-graph",
    "donjayamanne.githistory",
    "oderwat.indent-rainbow",
    "PKief.material-icon-theme",
    "SonarSource.sonarlint-vscode",
    "usernamehw.errorlens",
    "semanticdiff.semanticdiff"
  ];

  idx.previews = {
    enable = true;
    previews = [
      {
        command = [
          "npm"
          "run"
          "start"
        ];
        manager = "web";
        id = "web";
      }
    ];
  };
}