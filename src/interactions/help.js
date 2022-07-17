const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("ヘルプを表示します"),
  async execute(interaction) {
    interaction.reply({
      embeds: [{
        title: "ヘルプ",
        color: "43a1ec",
        timestamp: new Date(),
        fields: [
          {
            name: "`/join`",
            value: "読み上げを開始します"
          },
          {
            name: "`/leave`",
            value: "読み上げを終了します"
          },
          {
            name: "`/word`",
            value: "単語を辞書に登録します。「読み」が空欄の場合は単語を削除します"
          },
          {
            name: "`/speaker`",
            value: "自分のメッセージを読み上げる話者を設定します"
          },
          {
            name: "`/settings`",
            value: "「read_name」は名前の読み上げを、「join_left_check」は入退出の読み上げと通知を、設定します　※サーバー管理者のみ"
          },
          {
            name: "`/dictionary export`",
            value: "辞書を出力します"
          },
          {
            name: "`/dictionary delete`",
            value: "辞書を削除します"
          },
          {
            name: "`「投稿したメッセージのメニュー」→「アプリ」→「辞書として追加」`",
            value: "辞書をインポートします。dictファイルを一度投稿し、上記通りの手順で行えば追加できます"
          }
        ]
      }]
    });
  }
}