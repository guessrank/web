import { promises as fs } from 'fs'

export default async function readJSONFile({ url }: { url: string }) {
	const file = await fs.readFile(process.cwd() + url, 'utf8')
	return JSON.parse(file)
}
