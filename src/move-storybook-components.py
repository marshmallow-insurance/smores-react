import os
import shutil

def rename_and_move_stories(src_directory):
    for root, dirs, files in os.walk(src_directory, topdown=False):
        # Rename 'storybook-components' directories to 'storybook'
        if os.path.basename(root) == 'storybook-components':
            new_dir_path = os.path.join(os.path.dirname(root), 'storybook')
            os.rename(root, new_dir_path)
            print(f"Renamed '{root}' to '{new_dir_path}'")
            # Ensure iteration continues to avoid moving files into a directory that has been renamed in this loop
            continue

        # Move '*.stories.tsx' files into 'storybook', create it if it doesn't exist
        for file in files:
            if file.endswith('.stories.tsx'):
                storybook_dir = os.path.join(root, 'storybook')
                if not os.path.exists(storybook_dir):
                    os.makedirs(storybook_dir)
                    print(f"Created 'storybook' directory at '{storybook_dir}'")
                
                original_file_path = os.path.join(root, file)
                new_file_path = os.path.join(storybook_dir, file)
                shutil.move(original_file_path, new_file_path)
                print(f"Moved '{original_file_path}' to '{new_file_path}'")

if __name__ == "__main__":
    src_directory = './'  # Replace this with the actual path to your src directory
    rename_and_move_stories(src_directory)
