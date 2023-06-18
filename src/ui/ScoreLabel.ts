import Phaser from 'phaser'

const formatScore = (score: any) => `Score: ${score}`

export default class ScoreLabel extends Phaser.GameObjects.Text {
    score: any;
    constructor(scene: Phaser.Scene, x: number, y: number, score: any, style: { fontSize: string | undefined; fill?: string; fontFamily?: string | undefined; fontStyle?: string | undefined; font?: string | undefined; backgroundColor?: string | undefined; color?: string | undefined; stroke?: string | undefined; strokeThickness?: number | undefined; shadow?: Phaser.Types.GameObjects.Text.TextShadow | undefined; padding?: Phaser.Types.GameObjects.Text.TextPadding | undefined; align?: string | undefined; maxLines?: number | undefined; fixedWidth?: number | undefined; fixedHeight?: number | undefined; resolution?: number | undefined; rtl?: boolean | undefined; testString?: string | undefined; baselineX?: number | undefined; baselineY?: number | undefined; wordWrap?: Phaser.Types.GameObjects.Text.TextWordWrap | undefined; metrics?: Phaser.Types.GameObjects.Text.TextMetrics | undefined }) {
        super(scene, x, y, formatScore(score), style)

        this.score = score
    }

    setScore(score: any) {
        this.score = score
        this.updateScoreText()
    }

    add(points: any) {
        this.setScore(this.score + points)
    }

    updateScoreText() {
        this.setText(formatScore(this.score))
    }
}