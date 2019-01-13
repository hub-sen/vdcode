import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * @author shisen
 */
public class ShowFile {
    private static List<String> list = new ArrayList<>();

    public static void main(String[] args) throws IOException {

        File file = new File("ShowFile.java");
        String path = file.getAbsolutePath().replace("ShowFile.java", "");
        getPage(path);
    }

    private static void getPage(String path) throws IOException {

        List<String> list = showFile(new File(path));
        int prex = path.length() == 4 ? 3 : path.length();
        List<Object> collect = list.stream().filter(x -> x.endsWith(".mp4") || x.endsWith(".mp3"))
                .map(fileStr -> "\n    <button onclick='change(this.value)' value='" + fileStr.substring(prex) + "'>"
                        + fileStr.substring(fileStr.lastIndexOf('\\') + 1) + "</button>")
                .collect(Collectors.toList());

        StringBuilder z = new StringBuilder("<!DOCTYPE html>\n" +
                "\n" +
                "<head>\n" +
                "    <title>D:\\VSProject\\</title>\n" +
                "    <style>\n" +
                "        video {\n" +
                "            width: 80%;\n" +
                "        }\n" +
                "\n" +
                "        button {\n" +
                "            background-color: #e7e7e7;\n" +
                "            border: none;\n" +
                "            padding: 8px 8px;\n" +
                "            text-align: center;\n" +
                "            font-size: 16px;\n" +
                "            margin: 2px 2px;\n" +
                "            cursor: pointer;\n" +
                "            border-radius: 12px;\n" +
                "        }\n" +
                "\n" +
                "        body {\n" +
                "            text-align: center;\n" +
                "            background-color: hotpink;\n" +
                "        }\n" +
                "\n" +
                "        h1 {\n" +
                "            color: deeppink;\n" +
                "        }\n" +
                "    </style>\n" +
                "</head>\n" +
                "\n" +
                "<body>\n" +
                "    <h1>author : 施森18018597739@163.com</h1>");
        for (Object o : collect) {
            z.append(o);
        }
        z.append("\n" +
                "    <div>\n" +
                "        <video id='myVideo' src='' controls></video>\n" +
                "    </div>\n" +
                "    <script>\n" +
                "        function change(data) {\n" +
                "            document.getElementById('myVideo').src = data;\n" +
                "        }\n" +
                "    </script>\n" +
                "</body>\n" +
                "\n" +
                "</html>");

        BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(path + "result.html"));
        bos.write(z.toString().getBytes());
        bos.close();
    }

    private static List<String> showFile(File file) {
        File[] files = file.listFiles();
        if (files != null) {
            for (File file1 : files) {
                if (file1.isDirectory()) {
                    showFile(file1);
                    continue;
                }
                list.add(file1.getAbsolutePath());
            }
        }
        return list;
    }
}