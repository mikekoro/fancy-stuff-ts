import GistFile from './GistFile';

export default interface GistItem {
    id: string
    description: string,
    forks_url: string,
    files: Array<GistFile>
}